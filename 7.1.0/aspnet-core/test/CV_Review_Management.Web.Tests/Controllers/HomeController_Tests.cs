using System.Threading.Tasks;
using CV_Review_Management.Models.TokenAuth;
using CV_Review_Management.Web.Controllers;
using Shouldly;
using Xunit;

namespace CV_Review_Management.Web.Tests.Controllers
{
    public class HomeController_Tests: CV_Review_ManagementWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}