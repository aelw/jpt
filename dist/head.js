	function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var id = getParameterByName('img');

document.write("\
<img onClick=\"javascript:window.scrollTo(0,0)\" onerror=\"this.src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/full-moon-with-face_1f31d.png';\"style='width:80px;border-radius:10px;margin:10px;position:fixed;z-index:9999'src='http://"+id+"'>");

document.write("\
<body>\n\
<main>\n\
  \n\
<div style='text-align:right !important'><h3><a href='http://stock.1002.pw/moontarot/dist/today?img="+id+"'>Daily</a></h3></div>\n\
<div style='text-align:right !important'><h3><a href='http://stock.1002.pw/moontarot/dist/today?img="+id+"'>Monthly</a></h3></div>\n\
<div style='text-align:right !important'><h3><a href='http://stock.1002.pw/moontarot/dist/today?img="+id+"'>Yearly</a></h3></div>\n\
<div style='text-align:right !important'><h3><a href='http://stock.1002.pw/moontarot/dist/love?img="+id+"'>Love</a></h3></div>\n\
<div style='text-align:right !important'><h3><a href='http://stock.1002.pw/moontarot/dist/work?img="+id+"'>Health</a></h3></div>\n\
<div style='text-align:right !important'><h3><a href='http://stock.1002.pw/moontarot/dist/money?img="+id+"'>Money</a></h3></div>");
