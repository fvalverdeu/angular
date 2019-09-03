using System.Web;
using System.Web.Optimization;

namespace PortalFFVVNet
{
    public class BundleConfig
    {
        // Para obtener más información sobre las uniones, visite https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Utilice la versión de desarrollo de Modernizr para desarrollar y obtener información. De este modo, estará
            // para la producción, use la herramienta de compilación disponible en https://modernizr.com para seleccionar solo las pruebas que necesite.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            //bundles de angular
            bundles.Add(new ScriptBundle("~/Script/Bundles").Include(
                //"~/Bundles/*.js",
                //"~/Bundles/*.map"
                "~/Bundles/home-home-module-es2015.js",
                "~/Bundles/home-home-module-es2015.js.map",
                "~/Bundles/main-es2015.js",
                "~/Bundles/main-es2015.js.map",
                //"~/Bundles/polyfills-es2015.js",
                //"~/Bundles/polyfills-es5",
                "~/Bundles/runtime-es2015.js",
                "~/Bundles/runtime-es5",
                "~/Bundles/vendor-es2015",
                "~/Bundles/vendor-es5"


                ));

            bundles.Add(new ScriptBundle("~/Content/Styles").Include("~/Bundles/styles.*"));
        }
    }
}
