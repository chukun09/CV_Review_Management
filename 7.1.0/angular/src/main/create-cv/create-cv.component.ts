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
import {
  FormBuilder,
  FormArray,
  Validators,
  FormGroup,
  FormControl,
} from "@angular/forms";
import html2canvas from "html2canvas";
import { CVInformationService } from "services/cv-information.service";
import { AddressService } from "services/address.service";
import { isBuffer } from "lodash-es";
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-create-cv",
  templateUrl: "./create-cv.component.html",
  styleUrls: ["./create-cv.component.css"],
  animations: [appModuleAnimation()],
})
export class CreateCvComponent extends AppComponentBase implements OnInit {
  @ViewChild("cv", { static: false }) el!: ElementRef;
  userLogin: any;
  title: any = "";
  submitted = false;
  username: any;
  dataCV: any;
  templateId!: any;
  cvId: any = 1;
  cvRouterId: any;
  userId!: any;
  addressNow: any;
  newCV: any = {};
  pdfFile: any = {};
  isCollapsedProfile = false;
  isCollapsedSkills = false;
  isCollapsedHobbies = false;
  isCollapsedExperiences = false;
  isCollapsedEducations = false;
  skillLevels = [
    { name: "Tập sự", id: "0" },
    { name: "Có kinh nghiệm", id: "1" },
    { name: "Tốt", id: "2" },
    { name: "Rất tốt", id: "3" },
    { name: "Xuất sắc, chuyên gia", id: "4" },
  ];
  skillTypes = [
    { name: "Lập trình", id: "0" },
    { name: "Ngoại ngữ", id: "1" },
    { name: "Kĩ năng khác", id: "2" },
  ];
  employmentTypes = [
    { name: "Toàn thời gian", id: "0" },
    { name: "Bán thời gian", id: "1" },
    { name: "Tự kinh doanh", id: "2" },
    { name: "Làm tự do", id: "3" },
    { name: "Hợp đồng", id: "4" },
    { name: "Thực tập", id: "5" },
  ];
  schoolTypes = [
    { name: "Trường Cấp hai", id: "0" },
    { name: "Trường cấp ba", id: "1" },
    { name: "Trường Đại học", id: "2" },
  ];
  genders = [
    { name: "Nam", id: "0" },
    { name: "Nữ", id: "1" },
    { name: "Khác", id: "2" },
  ];
  provinces = [];
  districts = [];
  constructor(
    injector: Injector,
    private titleService: Title,
    private _location: Location,
    public fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private cvInformationService: CVInformationService,
    private addressService: AddressService,
    private route: ActivatedRoute,
    private _router: Router,
    private SpinnerService: NgxSpinnerService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cvId = params["id"];
      this.cvRouterId = this.cvId;
      this.userId = params["userId"];
    });
    if (this.userId) {
      this.cvInformationService.getDetailCVById(this.cvId).subscribe((res) => {
        this.cvId = res.result.templateId;
        this.templateId = res.result.templateId;
        this.generateDataEditCV(res.result);
      });
    } else if (!this.cvId) {
      this.cvId = 1;
    }
    this.userLogin = this.appSession.user;
    this.username = this.userLogin.name;
    this.addressService.getAllProvinces().subscribe((res) => {
      this.provinces = res.result;
    });
    this.setTitle("CV " + this.userLogin.name + " " + this.userLogin.surname);
  }
  saveFilePDFServer(newCVId) {
    html2canvas(this.el.nativeElement, {
      allowTaint: true,
      scale: 1.8,
      useCORS: true,
    }).then((canvas) => {
      canvas.getContext("experimental-webgl");
      var imageData = canvas.toDataURL("image/jpeg", 1.0);
      let date: number = new Date().getTime();
      this.pdfFile.imageFile = imageData;
      this.pdfFile.imageName = this.getTitle() + "_" + date.toString();
      this.pdfFile.cVId = newCVId;
      this.cvInformationService
        .convertImageToPDFServer(this.pdfFile)
        .subscribe((res) => {
          if (this.userId) this.message.success("Bạn đã sửa CV thành công");
          else
            this.message.success(
              "Chúc mừng bạn đã tạo CV thành công, CV của bạn đã được tạo và lưu vào hệ thống!"
            );
          this.SpinnerService.hide();
          this._router.navigate([
            "/main/cv-management",
            localStorage.getItem("userId"),
          ]);
        });
    });
  }
  downloadPDFbyHTML() {
    let date: number = new Date().getTime();
    var title = this.getTitle();
    html2canvas(this.el.nativeElement, {
      allowTaint: true,
      scale: 1.8,
      useCORS: true,
    }).then(function (canvas) {
      const HTML_Width = canvas.width;
      const HTML_Height = canvas.height;
      var top_left_margin = 0;
      var PDF_Width = HTML_Width;
      var PDF_Height = HTML_Height;
      var canvas_image_width = HTML_Width;
      var canvas_image_height = HTML_Height;
      canvas.getContext("experimental-webgl");
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      console.log(imgData);
      var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
      pdf.addImage(
        imgData,
        "JPG",
        top_left_margin,
        top_left_margin,
        canvas_image_width,
        canvas_image_height
      );
      pdf.save(title + "_" + date + ".pdf");
    });
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
      province: [, [Validators.required]],
      district: [, [Validators.required]],
    }),
    gender: [],
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
  get address() {
    return (
      this.createCVForm.get("address.street").value +
      ", " +
      this.handleAddress()
    );
  }
  changeAddress() {
    this.addressNow =
      this.createCVForm.get("address.street").value +
      ", " +
      this.handleAddress();
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
    return this.createCVForm.get("hobbies") as FormArray;
  }
  get skills(): FormArray {
    return <FormArray>this.createCVForm.get("skills");
  }
  get experiences(): FormArray {
    return <FormArray>this.createCVForm.get("experiences");
  }
  get educations(): FormArray {
    return <FormArray>this.createCVForm.get("educations");
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

  /*############### Add Dynamic Elements ###############*/
  createSkills(): FormGroup {
    return this.fb.group({
      skillName: [null, Validators.required],
      level: [null, Validators.required],
      skillType: [null, Validators.required],
      cvId: this.cvId,
    });
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
      skills: [null],
      cvId: this.cvId,
    });
  }
  createEducations(): FormGroup {
    return this.fb.group({
      schoolName: [null, Validators.required],
      schoolType: [null, Validators.required],
      startDate: [null],
      endDate: [null],
      major: [null],
      description: [null],
      cvId: this.cvId,
    });
  }
  deleteSectionSkills(i) {
    this.skills.removeAt(i);
  }
  deleteSectionHobbies(i) {
    this.hobbies.removeAt(i);
  }
  deleteSectionExperiences(i) {
    this.experiences.removeAt(i);
  }
  deleteSectionEducations(i) {
    this.educations.removeAt(i);
  }
  addSectionsSkills() {
    this.skills.push(this.createSkills());
  }
  addSectionsHobbies() {
    this.hobbies.push(this.fb.control(""));
  }
  addSectionExperiences() {
    this.experiences.push(this.createExperiences());
  }
  addSectionEducations() {
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
  getDistrictsByProvince(id) {
    if (id == null) this.districts = [];
    this.addressService.getDistrictsByProvince(id).subscribe((res) => {
      this.createCVForm.get("address.district").setValue(null);
      this.districts = res.result;
    });
  }
  generateDataEditCV(data: any) {
    this.imageUrl = data.avatar;
    this.createCVForm.get("file").setValue(data.avatar);
    this.createCVForm.get("firstName").setValue(data.firstName);
    this.createCVForm.get("lastName").setValue(data.lastName);
    this.createCVForm.get("email").setValue(data.email);
    this.createCVForm.get("phoneNumber").setValue(data.phoneNumber);
    this.createCVForm.get("headline").setValue(data.headline);
    this.createCVForm.get("description").setValue(data.description);
    this.createCVForm.get("birthDate").setValue(new Date(data.birthDate));
    setTimeout(() => {
      this.createCVForm.controls["gender"].setValue(data.gender.toString());
    }, 1000);
    data.listExperiences.map((element) => {
      this.experiences.push(
        this.fb.group({
          position: element.position,
          company: element.company,
          location: element.location,
          employmentType: element.employmentType.toString(),
          startDate: new Date(element.startDate),
          endDate: element.endDate ?  new Date(element.endDate) : new Date(),
          industry: element.industry,
          description: element.description,
          skills: element.skills,
          cvId: this.cvId,
        })
      );
    });
    data.listEducations.map((element) => {
      this.educations.push(
        this.fb.group({
          schoolName: element.schoolName,
          schoolType: element.schoolType.toString(),
          startDate: new Date(element.startDate),
          endDate: element.endDate ?  new Date(element.endDate) : new Date(),
          major: element.major,
          description: element.description,
          cvId: this.cvId,
        })
      );
    });
    data.listSkills.map((element) => {
      this.skills.push(
        this.fb.group({
          skillName: element.skillName,
          level: element.level.toString(),
          skillType: element.skillType.toString(),
          cvId: this.cvId,
        })
      );
    });
    data.listHobbies.map((element) => {
      this.hobbies.push(this.fb.control(element.nameHobby.toString()));
    });
  }

  createOrUpdateNewCVAndAllInformations() {
    this.newCV.avatar = this.createCVForm.get("file").value;
    this.newCV.firstName = this.createCVForm.get("firstName").value;
    this.newCV.lastName = this.createCVForm.get("lastName").value;
    this.newCV.email = this.createCVForm.get("email").value;
    this.newCV.phoneNumber = this.createCVForm.get("phoneNumber").value;
    this.newCV.headline = this.createCVForm.get("headline").value;
    this.newCV.description = this.createCVForm.get("description").value;
    this.newCV.gender = this.createCVForm.get("gender").value;
    this.newCV.address = this.address;
    this.newCV.birthDate = moment(
      this.createCVForm.get("birthDate").value
    ).format("MM/DD/YYYY");
    this.newCV.userId = localStorage.getItem("userId");
    this.newCV.templateId = this.cvId;
    let listEducations = this.createCVForm.get("educations").value;
    listEducations.forEach((element) => {
      element.startDate = moment(element.startDate).format("MM/DD/YYYY");
      element.endDate = element.endDate ?  moment(element.endDate).format("MM/DD/YYYY") : moment(new Date()).format("MM/DD/YYYY");
    });
    this.newCV.listEducations = listEducations;
    let listExperiences = this.createCVForm.get("experiences").value;
    listExperiences.forEach((element) => {
      element.startDate = moment(element.startDate).format("MM/DD/YYYY");
      element.endDate = element.endDate ?  moment(element.endDate).format("MM/DD/YYYY") : moment(new Date()).format("MM/DD/YYYY");
    });
    this.newCV.listExperiences = listExperiences;
    this.newCV.listSkills = this.createCVForm.get("skills").value;
    let listHobbies = this.createCVForm.get("hobbies").value;
    listHobbies = listHobbies.map((element) => ({
      nameHobby: element,
      cvId: this.cvId,
    }));
    this.newCV.listHobbies = listHobbies;
    let imageFile: any = {};
    imageFile.imageFile = this.newCV.avatar;
    this.SpinnerService.show();
    if (this.userId) {
      this.newCV.id = this.cvRouterId;
      this.cvInformationService.UpdateCVAndInformations(this.newCV).subscribe(
        (res) => {
          this.saveFilePDFServer(this.cvRouterId);
        },
        (error) => {
          this.message.error("Vui lòng kiểm tra lại !");
        }
      );
    } else {
      this.cvInformationService
        .CreateNewCVAndAllInformations(this.newCV)
        .subscribe(
          (res) => {
            console.log(res);
            this.saveFilePDFServer(res.result);
          },
          (error) => {
            this.message.error("Vui lòng điền thông tin đầy đủ!");
          }
        );
    }
  }
  handleAddress() {
    if (
      this.createCVForm.get("address.district").value &&
      this.createCVForm.get("address.province").value
    ) {
      let districtId = this.createCVForm.get("address.district").value;
      let provinceId = this.createCVForm.get("address.province").value;
      let districtName = this.districts.find(
        (x) => x.id == districtId
      ).districtName;
      let provinceName = this.provinces.find((x) => x.id == provinceId).name;
      return districtName + ", " + provinceName;
    }
  }
}
