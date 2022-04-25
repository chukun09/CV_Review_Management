using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace CVRM.Controllers
{
    public abstract class CVRMControllerBase: AbpController
    {
        protected CVRMControllerBase()
        {
            LocalizationSourceName = CVRMConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
