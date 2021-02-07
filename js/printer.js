    class Print
{
    static AsTitle(msg)
    {
        $('#text').append( "<h1 style='margin-top: 10px;'>" + msg + "</h1>" );
    }
    
    static AsParagraph(msg)
    {
        $('#text').append( "<p style='margin-top: 30px;'>" + msg + "</p>" );
    }

    static AsDialogue(msg)
    {
        $('#text').append( "<p style='font-style: italic; margin-top: 30px;'>" + msg + "</p>" );
    }

    static AsInfo(msg)
    {
        $('#text').append( "<p style='font-weight: bold; margin-top: 5px;'>" + msg + "</p>" );
    }
}