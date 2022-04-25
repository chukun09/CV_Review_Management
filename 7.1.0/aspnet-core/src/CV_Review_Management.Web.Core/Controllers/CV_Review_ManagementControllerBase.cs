using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace CV_Review_Management.Controllers
{
    public abstract class CV_Review_ManagementControllerBase: AbpController
    {
        protected CV_Review_ManagementControllerBase()
        {
            LocalizationSourceName = CV_Review_ManagementConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
