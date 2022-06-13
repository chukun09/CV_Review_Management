import {
  Component,
  ElementRef,
  Injector,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { Title } from "@angular/platform-browser";
import { appModuleAnimation } from "@shared/animations/routerTransition";
import { AppComponentBase } from "@shared/app-component-base";
import { Location } from "@angular/common";
import { jsPDF } from "jspdf";
import { ChangeDetectorRef } from "@angular/core";
import { FormBuilder, FormArray, Validators, FormGroup } from "@angular/forms";
import html2canvas from "html2canvas";
import { title } from "process";
@Component({
  selector: "app-create-cv",
  templateUrl: "./create-cv.component.html",
  styleUrls: ["./create-cv.component.css"],
  animations: [appModuleAnimation()],
})
export class CreateCvComponent extends AppComponentBase implements OnInit {
  @ViewChild("cv", { static: false }) el!: ElementRef;
  test: any;
  userLogin: any;
  title: any = "";
  submitted = false;
  username: any;
  dataCV: any;
  isCollapsedProfile = false;
  isCollapsedSkills = false;
  isCollapsedHobbies = false;
  isCollapsedExperiences = false;
  isCollapsedEducations = false;
  skillLevels = [
    { name: 'Tập sự', id: '0' },
    { name: 'Có kinh nghiệm', id: '1' },
    { name: 'Tốt', id: '2' },
    { name: 'Rất tốt', id: '3' },
    { name: 'Xuất sắc, chuyên gia', id: '4' }]
  skillTypes = [
    { name: 'Lập trình', id: '0' },
    { name: 'Ngoại ngữ', id: '1' },
    { name: 'Kĩ năng khác', id: '2' },
  ]
  employmentTypes = [
    { name: 'Toàn thời gian', id: '0' },
    { name: 'Bán thời gian', id: '1' },
    { name: 'Tự kinh doanh', id: '2' },
    { name: 'Làm tự do', id: '3' },
    { name: 'Hợp đồng', id: '4' },
    { name: 'Thực tập', id: '5' },
  ]
  schoolTypes = [
    { name: 'Trường Cấp hai', id: '0' },
    { name: 'Trường cấp ba', id: '1' },
    { name: 'Trường Đại học', id: '2' },
  ]
  constructor(
    injector: Injector,
    private titleService: Title,
    private _location: Location,
    public fb: FormBuilder,
    private cd: ChangeDetectorRef,
  ) {
    super(injector);
    // this.test = require('html-loader!../../assets/template/ResponsiveCVResume/index.html');
    // this.test = this.test.default;
  }

  ngOnInit(): void {
    this.userLogin = this.appSession.user;
    this.username = this.userLogin.name;
    this.setTitle("CV " + this.userLogin.name + " " + this.userLogin.surname);
  }
  downloadPDFbyHTML() {
    let date: number = new Date().getTime();
    // let pdf = new jsPDF('l', 'mm', [210, 297]);
    // pdf.html(this.el.nativeElement, {
    //   callback: (pdf) => {
    //     if (!this.title || this.title === '') {
    //       this.setTitle("CV " + this.userLogin.name + " " + this.userLogin.surname);
    //     }
    //     pdf.save(this.title + "_" + date + ".pdf");
    //   }
    // });
    var title = this.getTitle();
    html2canvas(this.el.nativeElement, { allowTaint: true, scale: 1.8 }).then(
      function (canvas) {
        const HTML_Width = canvas.width;
        const HTML_Height = canvas.height;
        var top_left_margin = 0;
        var PDF_Width = HTML_Width;
        var PDF_Height = HTML_Height;
        var canvas_image_width = HTML_Width;
        var canvas_image_height = HTML_Height;
        canvas.getContext("experimental-webgl");
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
        pdf.addImage(
          imgData,
          "JPG",
          top_left_margin,
          top_left_margin,
          canvas_image_width,
          canvas_image_height
        );
        console.log(title);
        pdf.save(title + "_" + date + ".pdf");
      }
    );
    ///Solution 2
    // return html2canvas(this.el.nativeElement).then((canvas) => {
    //   let date: number = new Date().getTime();
    //   const img = canvas.toDataURL("img/jpeg");
    //   var imgWidth = (canvas.width * 60) / 240;
    //   var imgHeight = (canvas.height * 60) / 240;
    //   // jspdf changes
    //   var pdf = new jsPDF("p", "mm", "a4");
    //   pdf.addImage(img, "png", 15, 2, imgWidth, imgHeight); // 2: 19
    //   pdf.save(this.title + "_" + date + ".pdf");
    // });
  }
  public setTitle(newTitle: string) {
    this.title = newTitle;
    this.titleService.setTitle(newTitle + " | CVRM");
  }
  public getTitle(): string {
    return this.title;
  }
  async cancelCreate() {
    this._location.back();
  }
  createCVForm = this.fb.group({
    file: [null],
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    email: [
      "",
      [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
      ],
    ],
    phoneNumber: [
      "",
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern("^[0-9]+$"),
      ],
    ],
    headline: [""],
    description: [""],
    address: this.fb.group({
      street: ["", [Validators.required]],
      city: ["", [Validators.required]],
      cityName: ["", [Validators.required]],
    }),
    gender: ["Nam"],
    birthDate: [new Date()],
    certificates: this.fb.array([]),
    educations: this.fb.array([]),
    experiences: this.fb.array([]),
    hobbies: this.fb.array([]),
    skills: this.fb.array([]),
  });
  get phoneNumber() {
    return this.createCVForm.get("phoneNumber");
  }
  get firstName() {
    return this.createCVForm.get("firstName");
  }
  get lastName() {
    return this.createCVForm.get("lastName");
  }
  get email() {
    return this.createCVForm.get("email");
  }
  get gender() {
    return this.createCVForm.get("gender");
  }
  get birthDate() {
    return this.createCVForm.get("birthDate");
  }
  get headline() {
    return this.createCVForm.get("headline");
  }
  get description() {
    return this.createCVForm.get("description");
  }
  get hobbies() {
    return this.createCVForm.get('hobbies') as FormArray;
  }
  get skills(): FormArray {
    return <FormArray>this.createCVForm.get('skills');
  }
  get experiences(): FormArray {
    return <FormArray>this.createCVForm.get('experiences');
  }
  get educations(): FormArray {
    return <FormArray>this.createCVForm.get('educations');
  }

  /*########################## File Upload ########################*/
  @ViewChild("fileInput") el2!: ElementRef;
  imageUrl: any =
    "https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg";
  editFile: boolean = true;
  removeUpload: boolean = false;

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.createCVForm.patchValue({
          file: reader.result,
        });
        this.editFile = false;
        this.removeUpload = true;
      };
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
    }
  }

  // Function to remove uploaded file
  removeUploadedFile() {
    let newFileList = Array.from(this.el2.nativeElement.files);
    this.editFile = true;
    this.removeUpload = false;
    this.createCVForm.patchValue({
      file: [null],
    });
    this.imageUrl = [null];
  }

  // Getter method to access formcontrols
  get myForm() {
    return this.createCVForm.controls;
  }

  // Choose city using select dropdown
  changeCity(e) {
    this.createCVForm.get("address.cityName").setValue(e.target.value, {
      onlySelf: true,
    });
  }

  /*############### Add Dynamic Elements ###############*/
  createSkills(): FormGroup {
    return this.fb.group({
      skillName: [null, Validators.required],
      level: [null, Validators.required],
      skillType: [null, Validators.required]
    })
  }
  createExperiences(): FormGroup {
    return this.fb.group({
      position: [null, Validators.required],
      company: [null, Validators.required],
      location: [null],
      employmentType: [null, Validators.required],
      startDate: [null],
      endDate: [null],
      industry: [null, Validators.required],
      description: [null, Validators.required],
      skills: [null]
    })
  }
  createEducations(): FormGroup {
    return this.fb.group({
      schoolName: [null, Validators.required],
      degree: [null],
      activities: [null],
      description: [null, Validators.required],
      schoolType: [null, Validators.required],
      startDate: [null],
      endDate: [null],
      major: [null],
    })
  }
  deleteSectionSkills(i) {
    this.skills.removeAt(i);
  }
  deleteSectionHobbies(i) {
    this.hobbies.removeAt(i);
  }
  deleteSectionExperiences(i){
    this.experiences.removeAt(i);
  }
  deleteSectionEducations(i){
    this.educations.removeAt(i);
  }
  addSectionsSkills() {
    this.skills.push(this.createSkills());
  }
  addSectionsHobbies() {
    this.hobbies.push(this.fb.control(""));
  }
  addSectionExperiences(){
    this.experiences.push(this.createExperiences());
  }
  addSectionEducations(){
    this.educations.push(this.createEducations());
  }


  // Submit Registration Form
  onSubmit() {
    this.submitted = true;
    if (!this.createCVForm.valid) {
      alert("Please fill all the required fields to create a super hero!");
      return false;
    } else {
      console.log(this.createCVForm.value);
    }
  }
}
