using CVRM.Debugging;

namespace CVRM
{
    public class CVRMConsts
    {
        public const string LocalizationSourceName = "CVRM";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "e5bcdca8dd7146d1bd5bde62eef6758d";
    }
}
