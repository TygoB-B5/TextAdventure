class Printer
{
    PrintAsChapter(msg)
    {

    }
    
    PrintAsParagraph(msg)
    {

    }

    PrintAsDialogue(msg)
    {

    }

    PrintAsInfo(msg)
    {
        $('body').append( "<p>" + msg + "</p>" );
    }
}