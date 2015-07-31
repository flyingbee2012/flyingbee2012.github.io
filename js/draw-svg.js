var svg_brand, svg_logo, svg_slogan, svg_menu, svg_menu_1, svg_menu_2, svg_page;
var viewportwidth;
var viewportheight;
var svg_popupMenu;

getSize();

var svg_container =
        d3.select("body").select("svg")
                .attr("width", viewportwidth - 10)
                .attr("height", viewportheight - 10);

var svg =
        svg_container
                .append("g")
                        .attr("transform", "translate(0,0)");


// Add g for branding
svg_brand =
        svg.append("g")
                .attr("transform", "translate(0,0)")
                .attr("class", "svg-brand");


var confJsonData = [{ "title": "Bi Wu", "slogan": "" }];
var menuJsonData = [{ "title": "About Me", "target": "main", "cType": "html", "source": "page1.html" },
                    { "title": "Resume", "target": "main", "cType": "html", "source": "resume.html" },
                    { "title": "Dynamic Resume", "target": "main", "cType": "force", "source": "resume.json" },
                    { "title": "Contact", "target": "main", "cType": "html", "source": "contact.html" }];


svg_logo =
                svg_brand.selectAll(".svg-logo")
                                .data(confJsonData)
                        .enter().append("text")
                                .attr("class", "svg-logo")
                                .attr("x", "0")
                                .attr("font-size", "45px")
                                .attr("fill", "red")
                                .attr("y", "50")
                                .attr("text-anchor", "start")
                                .text(function (d) { return d.title; })
                                //.text(function (d) { return "BIG-D"; })
                        .transition()
                                .duration(1000)
                                .attr("font-size", "45px")
                                .attr("x", "10");


//Dynamic Text Slogan
svg_slogan =
        svg_brand.selectAll(".svg-slogan")
                        .data(confJsonData)
                .enter().append("text")
                        .attr("class", "svg-slogan")
                        .attr("fill", "black")
                        .attr("x", "0")
                        .attr("font-size", "14px")
                        .attr("y", "70")
                        .attr("text-anchor", "start")
                        .text(function (d) { return d.slogan; })
                        //.text(function (d) { return "Big Dashboard"; })
                .transition()
                        .duration(1000)
                        .attr("font-size", "14px")
                        .attr("x", "10");
//});

//Add g for Menu
svg_menu =
        svg.append("g")
                .attr("transform", "translate(0,0)")
                .attr("class", "svg-menu");


// add the menu items
svg_menu.selectAll(".svg-menu-item")
                .data(menuJsonData)
        .enter().append("rect")
                .attr("class", "svg-menu-item")
                .attr("rx", "6")
                .attr("ry", "6")
                .attr("x", "0")
                .attr("y", function (d, i) { return (94 + (i * 50)); })
                .attr("height", "40")
                .attr("width", "1")
                .attr("fill", "rgba(0,0,0,.05)")
                .attr("stroke", "rgba(99,99,99,1)")
                .attr("stroke-width", "2")
                .attr("class", "svg-menu-item")
                .transition()
                        .delay(function (d, i) { return 500 + i * 250 })
                        .duration(500)
                        .attr("width", "200")
                        .attr("x", "5");

// add menu text
svg_menu.selectAll(".svg-menu-text")
                .data(menuJsonData)
        .enter().append("text")
                .attr("class", "svg-menu-text")
                .attr("font-size", "20px")
                .attr("fill", "rgba(255,0,0,0")
                .attr("x", "20")
                .attr("y", function (d, i) { return (120 + (i * 50)); })
                .attr("text-anchor", "start")
                .text(function (d) { return d.title })
                        .transition()
                        .delay(function (d, i) { return 500 + i * 250 })
                        .duration(500)
                        .attr("fill", "rgba(255,0,0,1");



// add menu mask
svg_menu.selectAll(".svg-menu-mask")
                .data(menuJsonData)
        .enter().append("rect")
                .attr("class", "svg-menu-mask")
                .attr("ry", "6")
                .attr("rx", "6")
                .attr("y", function (d, i) { return (94 + (i * 50)); })
                .attr("x", "0")
                .attr("height", "40")
                .attr("width", "1")
                .attr("fill", "rgba(0,0,0,.0)")
                .attr("stroke", "rgba(99,99,99,1)")
                .attr("stroke-width", "2")
                .attr("class", "svg-menu-mask")
                .on("click", openPage)
                .transition()
                        .delay(function (d, i) { return 500 + i * 250 })
                        .duration(500)
                        .attr("width", "200")
                        .attr("x", "5");
                
svg_page =
               svg.append("g")
                       .attr("transform", "translate(0,0)")
                       .attr("class", "svg-chart");
svg.append("g")
                               .attr("transform", "translate(300,50)")
                               .attr("class", "svg-tree");

//Adding sattic page contents
svg_page.append("rect")
        .attr("ry", "6")
        .attr("rx", "6")
        .attr("y", "25")
        .attr("x", "150")
        .attr("height", viewportheight - 40)
        .attr("width", "1")
        .attr("fill", "rgba(0,0,0,0)")
        .attr("stroke", "rgba(99,99,99,0)")
        .attr("stroke-width", "2")
        .attr("class", "svg-menu-item")
        //.on("click", showMenu)
        .transition()
                .delay(500)
                .duration(500)
                .attr("stroke", "rgba(99,99,99,1)")
                .attr("width", viewportwidth - 240)
                .attr("x", "220");

svg_page.append("text")
        .attr("class", "svg-menu-text")
        .attr("font-family", "sans-serif")
        .attr("font-size", "32px")
        .attr("fill", "rgba(255,0,0,0)")
        .attr("x", "240")
        .attr("y", "70")
        .attr("text-anchor", "start")
        .text("About me")
                .transition()
                .delay(750)
                .duration(500)
                .attr("fill", "rgba(255,0,0,1)");

svg_page.append("foreignObject")
        .attr("class", "svg-p-text")
        .attr("font-family", "sans-serif")
        .attr("font-size", "18px")
        .attr("fill", "rgba(255,0,0,0)")
        .attr("x", "240")
        .attr("y", "110")
        .attr("width", viewportwidth - 270)
        .attr("height", "1")
        //.style("color", "rgba(0,0,0,0)")
        //.on("click", showMenu)
        .html("Loading...")
                .transition()
                .delay(1000)
                .duration(500)
                .attr("fill", "rgba(0,0,0,1)")
                //.attr("height", viewportheight - 140);
                //.style("color", "rgba(0,0,0,1)");

d3.text("pages/page1.html", function (data) {
    svg_page.select(".svg-p-text")
            .html("<div class='svg-contents'>" + data + "</div>");
});

//Responsive
window.onresize = responsiveSVG;

//Show Popup Menu
var menuVisible = false;

function getSize() {
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

    if (typeof window.innerWidth != 'undefined') {
        viewportwidth = window.innerWidth,
        viewportheight = window.innerHeight
    }

        //IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

    else if (typeof document.documentElement != 'undefined'
     && typeof document.documentElement.clientWidth !=
     'undefined' && document.documentElement.clientWidth != 0) {
        viewportwidth = document.documentElement.clientWidth,
        viewportheight = document.documentElement.clientHeight
    }

        // older versions of IE

    else {
        viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
        viewportheight = document.getElementsByTagName('body')[0].clientHeight
    }

}

function responsiveSVG() {
    getSize();
    // Adjust SVG container
    svg_container
            .attr("width", viewportwidth - 10)
            .attr("height", viewportheight - 10);

    svg_page.select("rect")
            .transition()
                    .attr("width", viewportwidth - 240)
                    .attr("height", viewportheight - 40);

    svg_page.select(".svg-p-text")
            .transition()
                    .attr("width", viewportwidth - 270)
                    .attr("height", viewportheight - 140);
}

function openPage(d)
{
    menuVisible=true;
    //showMenu()
    //Update page title
    svg_page.select("text")
            .transition()
                    .attr("fill", "rgba(255,0,0,0)")
            .transition()
                    .text(d.title)
                    .attr("fill", "rgba(255,0,0,1)");
        
    //update page contents
    //choose chart type
    if (d.cType == "force")
    {
        drawForceChart(d.source);
    }
    else
    {
        d3.text("pages/" + d.source, function(data){
            svg_page.select(".svg-p-text")
                    .attr("height", "1")
                    .html("<div class='svg-contents'>" + data + "</div>")
                    .transition()
                            .delay(650)
                            .duration(1000)
                            .attr("height", viewportheight - 140);
        });
                
        // clear the chart
        svg.selectAll("g.node").remove();
        svg.selectAll("path.link").remove();
        //root="";
        //update(root);
    }
    svg_page.select("rect")
            .transition()
                    .duration(400)
                    .attr("height", "65")
            .transition()
                    .duration(1000)
                    .attr("height", viewportheight - 40);

        

    //alert(d.source);
}


// draw the resume tree

var treeData = [
  {
      "name": "Bi Wu",
      "parent": "null",
      "children": [
        {
            "name": "Work Experience"
          , "children": [
                {
                    "name": "PayPal - Software Engineer"
              , "_children": [
                {
                    "name": "SSO (Single Sign-on)",
                    "url": "https://www.youtube.com/v/-jm5_PAxtSc"
                }

              ]

                },
            {
                "name": "Intel - UI Developer",
                "parent": "Architect",
                "_children": [
                  {
                      "name": "Multi-tenant Architecture",
                      "url": "https://www.youtube.com/v/jrKA3cJmoms"
                  }

                ]
            },
            {
                "name": "ASU - Research Assistant"
              , "_children": [
                {
                    "name": "Marketing Cloud",

                }
                , {
                    "name": "Customer Journey",
                    "url": "https://www.youtube.com/v/OUWwZcVA-mM"
                }
               , {
                   "name": "Social Studio",
                   "url": "https://www.youtube.com/v/27P6am1sIFQ"
               },
                {
                    "name": "Best Email Practices",
                    "url": "https://www.youtube.com/v/UqRGfbPsTAI"
                }
                ,
                {
                    "name": "Social Best Practices for Events",
                    "url": "https://www.youtube.com/v/hDjqBEy-a4M"
                }
                 ,
                {
                    "name": "Deliverability Guide to the Inbox",
                    "url": "https://www.youtube.com/v/NUEt3cZmSTo"
                }
                 ,
                {
                    "name": "Achieve List Growth Results",
                    "url": "https://www.youtube.com/v/64ERoj3wpxw"
                }

              ]


            },
            {
                "name": "ASU - Teaching Assistant"
              , "_children": [
                {
                    "name": "Communities",
                    "url": "https://www.youtube.com/v/iVS0p7xAVLQ"
                }

              ]

            },
              {
                  "name": "Qualia - Web Developer"
              , "_children": [
                {
                    "name": "Communities",
                    "url": "https://www.youtube.com/v/iVS0p7xAVLQ"
                }

              ]

              }
          

          ]
        },
        {
            "name": "Academic Projects"
          , "_children": [
            {
                "name": "3D Visualizer"

              , "_children": [
               {
                   "name": "Salesforce Data Access and Security",
                   "url": "https://www.youtube.com/v/17dr2GMvgd8"
               },

                {
                    "name": "Who Sees What",
                    "url": "https://www.youtube.com/v/X3Hg6OXhPO8"
                },
                {
                    "name": "Introduction to the Salesforce Security Model",
                    "url": "https://www.youtube.com/v/c1ccSXlVjXk"
                }

              ]

            },
            {
                "name": "Data Visualization"
               , "_children": [
                {
                    "name": "Get Started with Sales Cloud Administration",
                    "url": "https://www.youtube.com/v/MSp61khlP9s"
                }
               ]
            },
            {
                "name": "Ray Tracer"
               , "_children": [
                {
                    "name": "Get Started with Service Cloud Administration",
                    "url": "https://www.youtube.com/v/fJFlIqtlscI"
                }

               ]
            }
          ]

        },
        {
            "name": "Honors and Certificates"
          , "_children": [
            {
                "name": "IBM Certificed ODB solution Designer"
              , "_children": [
                {
                    "name": "Clicks or Code",
                    "url": "https://www.youtube.com/v/R_Ir4bq4px0"
                }

              ]

            },
            {
                "name": "C++ R2"
              , "_children": [
                {
                    "name": "Apex Coding Webinar",
                    "url": "https://www.youtube.com/v/WBeCWlbGX38"
                }

              ]

            },

            {
                "name": "First Class..."
               , "_children": [
                {
                    "name": "Metadata API Webinar",
                    "url": "https://www.youtube.com/v/S_R0Tzp1HmY"
                }

               ]
            }
          ]

        },

       {
           "name": "Education"
              , "_children": [
                {
                    "name": "ASU",
                    "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                },
                {
                    "name": "UESTC",
                    "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                }

              ]

       },
  {
      "name": "Skills"
              , "_children": [
                 {
                     "name": "Programming",
                     "_children": [
                         {
                             "name": "C/C++",
                             "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                         },
                         {
                             "name": "Java",
                             "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                         },
                         {
                             "name": "C#",
                             "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                         },
                         {
                             "name": "Python",
                             "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                         },
                         {
                             "name": "Assembly Language",
                             "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                         },
                         {
                             "name": "Win32 Programming",
                             "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                         },
                         {
                             "name": "MFC",
                             "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                         }

                     ]

                 }
                , {
                    "name": "Database",
                    "_children": [
                        {
                            "name": "MS SQL Server",
                            "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                        },
                        {
                            "name": "MySQL",
                            "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                        },
                        {
                            "name": "MS Access",
                            "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                        }
                    ]
                }
               , {
                   "name": "Web Development",
                   "_children": [
                     {
                         "name": "ASP.NET",
                         "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                     },
                     {
                         "name": "Django",
                         "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                     },
                     {
                         "name": "JavaScript / jQuery",
                         "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                     },
                     {
                         "name": "HTML / CSS",
                         "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                     }
                   ]
               }
                ,
                {
                    "name": "Computer Graphics",
                    "_children": [
                     {
                         "name": "OpenGL",
                         "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                     },
                     {
                         "name": "Qt",
                         "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                     },
                     {
                         "name": "D3",
                         "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                     },
                     {
                         "name": "DirectX",
                         "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                     },
                     {
                         "name": "OSG",
                         "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                     },
                     {
                         "name": "GLSL",
                         "url": "https://www.youtube.com/v/N5XNIuVdBf0"
                     }

                    ]
                }
              ]

  }

      ]
  }
];


//These functions are to draw charts
// *** Force Chart ***

var width = viewportwidth - 270,
height = viewportheight - 140,
i = 0,
duration = 750,
v,
node,
link,
root,
force,
vis,
tip;



var diagonal = d3.svg.diagonal()
    .projection(function (d) { return [d.y, d.x]; });


function drawForceChart(dataSource) {
    // Hide Text
    svg_page.select(".svg-p-text")
            .attr("height", "1");

    root = treeData[0];
    root.x0 = height / 2;
    root.y0 = 0;

    update(root);



    /*d3.json("json/" + dataSource, function (data) {
        root = data;
        root.x0 = width / 2;
        root.y0 = 0;
        update(root);
        });*/

}

function update(source) {

    var tree = d3.layout.tree()
                 .size([height, width]);
    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);

    //source.y -= 500;

    // Normalize for fixed-depth.
    nodes.forEach(function (d) { d.y = d.depth * 180; });

    // Update the nodes
    var node = svg.selectAll("g .svg-tree").selectAll("g .node")
        .data(nodes, function (d) { return d.id || (d.id = ++i); });


    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function (d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
        .on("click", click);

    nodeEnter.append("circle")
        .attr("r", 1e-6)
        .style("stroke-width", "3px")
        .style("fill", function (d) { return d._children ? "#ccff99" : "#fff"; });

    nodeEnter.append("text")
        .attr("x", function (d) { return d.children || d._children ? -13 : 13; })
        .attr("dy", ".35em")
        .attr("text-anchor", function (d) { return d.children || d._children ? "end" : "start"; })
        .text(function (d) { return d.name; })
        .style("fill-opacity", 1e-6)
        .style("font", "12px sans-serif")
       .attr("class", function (d) {
           if (d.url != null) { return 'hyper'; }
       })
            .on("click", function (d) {
                $('.hyper').attr('style', 'font-weight:normal').attr('color', 'red');
                d3.select(this).attr('style', 'font-weight:bold');
                if (d.url != null) {
                    //  window.location=d.url; 
                    $('#vid').remove();

                    $('#vid-container').append($('<embed>')
                       .attr('id', 'vid')
                       .attr('src', d.url + "?version=3&amp;hl=en_US&amp;rel=0&amp;autohide=1&amp;autoplay=1")
                       .attr('wmode', "transparent")
                       .attr('type', "application/x-shockwave-flash")
                       .attr('width', "100%")
                       .attr('height', "100%")
                       .attr('allowfullscreen', "true")
                       .attr('title', d.name)
                     )
                }
            });

    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });

    nodeUpdate.select("circle")
        .attr("r", 10)
        .style("fill", function (d) { return d._children ? "#ccff99" : "#fff"; });

    nodeUpdate.select("text")
        .style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function (d) { return "translate(" + source.y + "," + source.x + ")"; })
        .remove();

    nodeExit.select("circle")
        .attr("r", 1e-6);

    nodeExit.select("text")
        .style("fill-opacity", 1e-6);

    // Update the links
    var link = svg.selectAll("g .svg-tree").selectAll("path.link")
        .data(links, function (d) { return d.target.id; });

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function (d) {
            var o = { x: source.x0, y: source.y0 };
            return diagonal({ source: o, target: { x: source.x0, y: source.y0 } });
        });

    // Transition links to their new position.
    link.transition()
        .duration(duration)
        .attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(duration)
        .attr("d", function (d) {
            var o = { x: source.x, y: source.y };
            return diagonal({ source: o, target: o });
        })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });

    //svg.selectAll("g.node").attr("transform", "translate(500, 0)");
    //svg.selectAll("path.link").remove();
}

// Toggle children on click.
function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }
    update(d);
}

