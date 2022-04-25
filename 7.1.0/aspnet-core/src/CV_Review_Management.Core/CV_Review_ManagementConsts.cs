using CV_Review_Management.Debugging;

namespace CV_Review_Management
{
    public class CV_Review_ManagementConsts
    {
        public const string LocalizationSourceName = "CV_Review_Management";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "46f91921343a4b089f8c630ce5104b33";
    }
}
