#include <QCoreApplication>
#include <string>
#include <iostream>
#include <fstream>

using namespace std;

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);

    string part[8] = {"{\"Description\":",
                      ",\"A\":\"",
                      ",\"B\":\"",
                      ",\"C\":\"",
                      ",\"D\":\"",
                      ",\"E\":\"",
                      ",\"Solution\":\"",
                      ",\"Chapter\":\""};


    string Complete = part[0];

    char temp;

    fstream readFile,writeFile;

    readFile.open("excel_question.csv",ios::in);
    writeFile.open("myfile.txt",ios::out);

    bool check = 1;
    if(readFile.fail())
    {
        cout << "cannot read." << '\n';
        check = 0;
    }
    if(writeFile.fail())
    {
        cout << "cannot write." << '\n';
        check = 0;
    }

    if(check)
    {
        cout << "XDD";
        int count = 0;
        string filein;
        bool ignor=1;
        while(getline(readFile,filein))
        {
            if(ignor)
            {
                ignor = 0;
                continue;
            }
            cout << filein << '\n';
            for(int i = 0; i < filein.length(); i++)
            {

                temp = filein[i];
                if(i==0 && temp != '"')
                {
                    Complete += "\"";
                    Complete += temp;
                }
                else if(temp == '<')
                {
                    Complete += "&lt;";
                }
                else if(temp == '\"' && i!=0)
                {
                    if(filein[i+1]=='"')
                    {
                        continue;
                    }
                    else if(filein[i+1]==',')
                    {
                        Complete += "\"";
                    }
                    else {
                        Complete += "'";
                    }
                }
                else if(temp == ',')
                {
                    if(count != 0)
                    {
                        Complete += "\"";
                    }
                    count++;
                    Complete += part[count];
                }
                else
                {
                    Complete += temp;
                }
            }
            Complete += "\"}\n";
            writeFile << Complete;
            cout << Complete;
            Complete = part[0];
            count = 0;

        }
        readFile.close();
        writeFile.close();
    }



    return a.exec();
}
