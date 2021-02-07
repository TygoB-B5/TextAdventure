    class Print
{
    static AsChapter(msg)
    {

    }
    
    static AsParagraph(msg)
    {

    }

    static AsDialogue(msg)
    {

    }

    static AsInfo(msg)
    {
        $('body').append( "<p>" + msg + "</p>" );
    }
}