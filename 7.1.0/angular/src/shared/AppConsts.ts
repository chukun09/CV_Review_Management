export class AppConsts {

    static remoteServiceBaseUrl: string;
    static appBaseUrl: string;
    static appBaseHref: string; // returns angular's base-href parameter value if used during the publish

    static localeMappings: any = [];

    static readonly userManagement = {
        defaultAdminUserName: 'admin'
    };

    static readonly localization = {
        defaultLocalizationSourceName: 'CVRM'
    };

    static readonly authorization = {
        encryptedAuthTokenName: 'enc_auth_token'
    };
}
export const API_CONSTS = {
    Address: {
        GET_ALL_PROVINCE: "/Address/GetAllProvince",
        GET_DISTRICT_BY_PROVINCE: "/Address/GetAllDistrictByProvince"
    },
    UserEntity: {
        CREATE: "/UserEntity/Create",
        GET_BY_USERID: "/UserEntity/GetUserEntityByUserId",
        GET_USERID: "/UserEntity/GetUserIdByLoginUser",
    },
    PDFEntity: {
        GET_PDF_JSON: "/PDFEntity/getPDFJsonByCVId",
        CREATE: "/PDFEntity/Create"
    },
    TemplateEntity:{
        GET_BY_ID: "/CVTemplateEntity/Get",
        GET_ALL_TEMPLATE: "/CVTemplateEntity/GetAll",

    },
    CVEntity:{ 
        GET_ALL_BY_USER_ID: "/CV/GetAllCVByUser",
        GET_CV_DETAIL_BY_ID: "/CV/GetDetailCVEntity",
        CREATE_NEW_CV_DETAIL: "/CV/CreateNewCVAndAllInformations",
        DELETE_CV: "/CV/Delete",
        UPDATE_CV_AND_INFORMATION: "/CV/EditCVAndAllInformations"
        
    },
    CVLikeEntity:{
        UPDATE_STATUS_LIKE: "/CVLikeEntity/UpdateStatusLike",
    },
    CVFile:{
        UPLOAD_FILE_AND_RETURN_URL: "/CV/uploadImage", 
        CONVERT_IMAGE_TO_PDF: "/CV/ConvertImageToPDF"
    }

}
