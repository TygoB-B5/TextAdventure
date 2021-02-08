    class Print
{
    static AsTitle(msg)
    {
        $('#text').append( "<p id='title'>" + msg + "</p>");
    }
    
    static AsParagraph(msg)
    {
        $('#text').append( "<p id='paragraph'>" + msg + "</p>" );
    }

    static AsDialogue(msg)
    {
        $('#text').append( "<p id='dialogue'>&#62 " + msg + "</p>" );
    }

    static AsInfo(msg)
    {
        $('#text').append( "<p id='info'>" + msg + "</p>" );
    }

    static Space()
    {
        $('#text').append( "<div style='height: 200px'></div>" );
    }
}