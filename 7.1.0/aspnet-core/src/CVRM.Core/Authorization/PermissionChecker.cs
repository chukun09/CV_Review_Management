using Abp.Authorization;
using CVRM.Authorization.Roles;
using CVRM.Authorization.Users;

namespace CVRM.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
