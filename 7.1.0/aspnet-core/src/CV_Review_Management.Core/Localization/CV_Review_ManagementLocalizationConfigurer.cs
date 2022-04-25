using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace CV_Review_Management.Localization
{
    public static class CV_Review_ManagementLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(CV_Review_ManagementConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(CV_Review_ManagementLocalizationConfigurer).GetAssembly(),
                        "CV_Review_Management.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
