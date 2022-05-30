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
    UserEntity: {
        CREATE: "/UserEntity/Create",
        GET_BY_USERID: "/UserEntity/GetUserEntityByUserId",
    },
    PDFEntity: {
        GET_PDF_JSON: "/PDFEntity/getPDFJsonByCVId",
        CREATE: "/PDFEntity/Create"
    },
    TemplateEntity:{
        GET_BY_ID: "/CVTemplateEntity/Get"
    }

}
