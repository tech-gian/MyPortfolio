using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyPortfolio.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace MyPortfolio.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly List<String> Links;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;

            // A List of links for the website
            Links = new List<String>
                {
                "https://drive.google.com/file/d/1ycv_sAd-3GFjGVIIjutrM3YswO9FF04K/view?usp=sharing",
                "http://diatasys.com/",
                "https://greece.alg.academy/",
                "https://www.di.uoa.gr/en/studies/undergraduate/32",
                "https://www.di.uoa.gr/en/studies/undergraduate/18",
                "https://www.di.uoa.gr/en/studies/undergraduate/30",
                "https://www.di.uoa.gr/en/studies/undergraduate/36",
                "https://www.di.uoa.gr/en/studies/undergraduate/34",
                "https://www.di.uoa.gr/en/studies/undergraduate/39",
                "https://www.di.uoa.gr/en/studies/undergraduate/38",
                "https://www.di.uoa.gr/en/studies/undergraduate/44",
                "https://www.di.uoa.gr/en/studies/undergraduate/42",
                "https://www.di.uoa.gr/en/studies/undergraduate/27",
                "https://dithub.gr/",
                "https://github.com/tech-gian/DitHub",
                "https://blog-in.gr/",
                "https://github.com/tech-gian/2020-Spring-Data-Structures",
                "https://github.com/tech-gian/OOPproj_2021",
                "https://contosocraftszap.azurewebsites.net/",
                "https://github.com/tech-gian/ContosoCrafts",
                "https://github.com/tech-gian/School_Simulation_java",
                "https://github.com/tech-gian/Contact_book",
                "mailto:zapantis2@gmail.com",
                "https://www.linkedin.com/in/giannis-zapantis-59018b1bb/",
                "https://github.com/tech-gian"
            };
        }

        public IActionResult Index()
        {
            return View(Links);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Cookies()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
