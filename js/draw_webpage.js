var svg_brand, svg_logo, svg_slogan, svg_menu, svg_menu_1, svg_menu_2, svg_page;
var viewportwidth;
var viewportheight;
var svg_popupMenu;

getSize();

var confJsonData = [{
    "title": "Bi Wu",
    "slogan": ""
}];
var menuJsonData = [{
    "title": "About Me",
    "target": "main",
    "cType": "html",
    "source": "about.html",
    "height": viewportheight - 50
}, {
    "title": "Resume",
    "target": "main",
    "cType": "html",
    "source": "resume.html",
    "height": "1300"
}, {
    "title": "Dynamic Resume",
    "target": "main",
    "cType": "force",
    "source": "resume.json",
    "height": viewportheight - 50
}, {
    "title": "Contact",
    "target": "main",
    "cType": "html",
    "source": "contact.html",
    "height": "500"
}];


function addMenuItems() {
    var svg_left_container =
        d3.select(".left_svg")
        .attr("width", 250)
        .attr("height", 600);

    var left_svg =
        svg_left_container
        .append("g")
        .attr("transform", "translate(0,0)");
    // Add g for branding
    svg_brand =
        left_svg.append("g")
        .attr("transform", "translate(0,0)")
        .attr("class", "svg-brand");

    svg_logo =
        svg_brand.selectAll(".svg-logo")
        .data(confJsonData)
        .enter().append("text")
        .attr("class", "svg-logo")
        .attr("x", "0")
        .attr("font-size", "45px")
        //.attr("font-family", "Times New Roman")
        .attr("font-style", "italic")
        .attr("fill", "blue")
        .attr("y", "50")
        .attr("text-anchor", "start")
        .text(function (d) {
            return d.title;
        })
        //.text(function (d) { return "BIG-D"; })
        .transition()
        .duration(1000)
        .attr("font-size", "45px")
        .attr("x", "30");


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
        .text(function (d) {
            return d.slogan;
        })
        //.text(function (d) { return "Big Dashboard"; })
        .transition()
        .duration(1000)
        .attr("font-size", "14px")
        .attr("x", "10");
    //});

    //Add g for Menu
    svg_menu =
        left_svg.append("g")
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
        .attr("y", function (d, i) {
            return (94 + (i * 50));
        })
        .attr("height", "40")
        .attr("width", "1")
        .attr("fill", "rgba(0,0,0,.05)")
        .attr("stroke", "rgba(99,99,99,1)")
        .attr("stroke-width", "2")
        .attr("class", "svg-menu-item")
        .transition()
        .delay(function (d, i) {
            return 500 + i * 250
        })
        .duration(500)
        .attr("width", "200")
        .attr("x", "5");

    // add menu text
    svg_menu.selectAll(".svg-menu-text")
        .data(menuJsonData)
        .enter().append("text")
        .attr("class", "svg-menu-text")
        .attr("font-size", "20px")
        .attr("fill", "rgba(0,0,255,0")
        .attr("x", "20")
        .attr("y", function (d, i) {
            return (120 + (i * 50));
        })
        .attr("text-anchor", "start")
        .text(function (d) {
            return d.title
        })
        .transition()
        .delay(function (d, i) {
            return 500 + i * 250
        })
        .duration(500)
        .attr("fill", "rgba(0,0,255,1");



    // add menu mask
    svg_menu.selectAll(".svg-menu-mask")
        .data(menuJsonData)
        .enter().append("rect")
        .attr("class", "svg-menu-mask")
        .attr("ry", "6")
        .attr("rx", "6")
        .attr("y", function (d, i) {
            return (94 + (i * 50));
        })
        .attr("x", "0")
        .attr("height", "40")
        .attr("width", "1")
        .attr("fill", "rgba(0,0,0,.0)")
        .attr("stroke", "rgba(99,99,99,1)")
        .attr("stroke-width", "2")
        .attr("class", "svg-menu-mask")
        .on("click", openPage)
        .transition()
        .delay(function (d, i) {
            return 500 + i * 250
        })
        .duration(500)
        .attr("width", "200")
        .attr("x", "5");
}

function loadAboutMe() {

    $("#right_cell").empty();
    var $htmlDiv = $("<div class='html_div'></div>");
    $.get('pages/about.html').success(function (data) {
        $(".right_cell").append($htmlDiv);
        $(".html_div").hide().fadeIn(1000).html(data);
    });

    //getSize();
    //var aboutHeight = menuJsonData[0].height;
    //$("#right_cell").width(viewportwidth * 0.75);
    $("#right_cell").animate({
        height: '50'
    });
    $("#right_cell").animate({
        height: viewportheight - 50
    });


}

addMenuItems();
loadAboutMe();
/*openPage({
    "title": "About Me",
    "target": "main",
    "cType": "html",
    "source": "about.html",
    "height": "800"
});*/

//Responsive
//window.onresize = responsiveSVG;

//Show Popup Menu
var menuVisible = false;

function getSize() {
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

    if (typeof window.innerWidth != 'undefined') {
        viewportwidth = window.innerWidth,
            viewportheight = window.innerHeight
    }

        //IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth !=
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
    //    svg_right_container
    //            .attr("width", viewportwidth - 10)
    //            .attr("height", viewportheight - 10);

    //    svg_page.select("rect")
    //            .transition()
    //                    .attr("width", viewportwidth - 240)
    //                    .attr("height", viewportheight - 40);
    //
    //    svg_page.select(".svg-p-text")
    //            .transition()
    //                    .attr("width", viewportwidth - 270)
    //                    .attr("height", viewportheight - 140);
}

function openPage(d) {
    //menuVisible=true;
    //showMenu()
    //Update page title
    //    svg_page.select("text")
    //            .transition()
    //                    .attr("fill", "rgba(255,0,0,0)")
    //            .transition()
    //                    .text(d.title)
    //                    .attr("fill", "rgba(255,0,0,1)");

    //update page contents
    var rectHeight;

    //choose chart type
    if (d.cType == "force") {
        drawResumeTree(d.source);
    } else {
        d3.text("pages/" + d.source, function (data) {

            $("#right_cell").empty();
            var $htmlDiv = $("<div class='html_div'></div>");
            $(".right_cell").append($htmlDiv);
            $(".html_div").hide().fadeIn(2000).html(data);


        });

    }

    getSize();

    $("#right_cell").width(viewportwidth *0.7168);
    $("#right_cell").animate({
        height: 60
    });
    $("#right_cell").animate({
        height: d.height
    }, 800);


}


// draw the resume tree


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
    .projection(function (d) {
        return [d.y, d.x];
    });


function drawResumeTree(dataSource) {

    // remove html content in the right cell
    $.get('pages/contact.html').success(function (data) {
        $(".html_div").remove();
    });

    d3.select(".right_cell").selectAll("*").remove();
   
        d3.select(".right_cell").append("svg")
            .attr("class", "right_svg")
            .attr("id", "right_svg")
            .attr("width", viewportwidth * 0.75)
            .attr("height", viewportheight - 10);


        // add svg into the right cell
        var svg_container2 = d3.select(".right_svg");

        svg =
            svg_container2
            .append("g")
            .attr("transform", "translate(0,0)");

        svg_page =
            svg.append("g")
            .attr("transform", "translate(0,0)")
            .attr("class", "svg-chart");

        svg.append("g")
            .attr("transform", "translate(200,50)")
            .attr("class", "svg-tree");
   

    root = resumeData[0];
    root.x0 = height / 2;
    root.y0 = 0;

    setTimeout(function () {
        update(root);
    }, 500);


}

function update(source) {

    var tree = d3.layout.tree()
        .size([height, width]);
    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);


    // Normalize for fixed-depth.
    nodes.forEach(function (d) {
        d.y = d.depth * 180;
    });

    // Update the nodes

    var node = svg.selectAll("g .svg-tree").selectAll("g .node")
        .data(nodes, function (d) {
            return d.id || (d.id = ++i);
        });


    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function (d) {
            return "translate(" + source.y0 + "," + source.x0 + ")";
        })
        .on("click", click);

    nodeEnter.append("circle")
        .attr("r", 1e-6)
        .style("stroke-width", "3px")
        .style("fill", function (d) {
            return d._children ? "#ccff99" : "#fff";
        });

    nodeEnter.append("text")
        .attr("x", function (d) {
            return d.children || d._children ? -13 : 13;
        })
        .attr("dy", ".35em")
        .attr("text-anchor", function (d) {
            return d.children || d._children ? "end" : "start";
        })
        .text(function (d) {
            return d.name;
        })
        .style("fill-opacity", 1e-6)
        .style("font", "12px sans-serif")
        .attr("class", function (d) {
            if (d.url != null) {
                return 'hyper';
            }
        })
        .on("click", function (d) {
            $('.hyper').attr('style', 'font-weight:normal').attr('color', 'red');
            d3.select(this).attr('style', 'font-weight:bold');
            if (d.url != null) {
                //  window.location=d.url; 
                /*$('#vid').remove();

                $('#vid-container').append($('<embed>')
                    .attr('id', 'vid')
                    .attr('src', d.url + "?version=3&amp;hl=en_US&amp;rel=0&amp;autohide=1&amp;autoplay=1")
                    .attr('wmode', "transparent")
                    .attr('type', "application/x-shockwave-flash")
                    .attr('width', "100%")
                    .attr('height', "100%")
                    .attr('allowfullscreen', "true")
                    .attr('title', d.name)
                )*/
                window.open(d.url, '_blank');
            }
        });

    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function (d) {
            return "translate(" + d.y + "," + d.x + ")";
        });

    nodeUpdate.select("circle")
        .attr("r", 10)
        .style("fill", function (d) {
            return d._children ? "#ccff99" : "#fff";
        });

    nodeUpdate.select("text")
        .style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function (d) {
            return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();

    nodeExit.select("circle")
        .attr("r", 1e-6);

    nodeExit.select("text")
        .style("fill-opacity", 1e-6);

    // Update the links

    var link = svg.selectAll("g .svg-tree").selectAll("path.link")
        .data(links, function (d) {
            return d.target.id;
        });

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function (d) {
            var o = {
                x: source.x0,
                y: source.y0
            };
            return diagonal({
                source: o,
                target: {
                    x: source.x0,
                    y: source.y0
                }
            });
        });

    // Transition links to their new position.
    link.transition()
        .duration(duration)
        .attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(duration)
        .attr("d", function (d) {
            var o = {
                x: source.x,
                y: source.y
            };
            return diagonal({
                source: o,
                target: o
            });
        })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });

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