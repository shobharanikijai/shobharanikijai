var num, i, chk=0;
num=19;
for(i=2; i<num; i++)
{
  if(num%2==0)
  {
    chk++;
    break;
  }
}
if(chk==0)
  console.log(num + " is a Prime Number");
else
  console.log(num + " is not a Prime Number");