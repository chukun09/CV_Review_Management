using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.SignalR
{
    public interface ITypeHubClient
    {
        Task BoardCastSomeThing(int jobID);
        Task BoardCastAnnotation();
        Task BoardCastToogleLike();
    }
}
