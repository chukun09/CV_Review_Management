using Abp.Authorization;
using CV_Review_Management.Authorization.Roles;
using CV_Review_Management.Authorization.Users;

namespace CV_Review_Management.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
