#include<stdio.h>
void printarray(int *a,int n)
{
for(int i=0; i<n;i++){
printf("%d\t",a[i]);

}
printf("\n");

}
typedef struct{
int max ;
int min;

}number_range;

number_range DAC_min_max(int *a, int i,int j){
int mid ;
number_range result,m1,m2;
if(i==j)
result.max=result.min=a[i];
else
if(i==j-1)
{
if(a[i]<a[j]){
result.max=a[j];
result.min=a[i];
}
else
{
result.max=a[i];
result.min=a[j];
}
}
else{
mid=(i+j)/2;
m1=DAC_min_max(a,i,mid);
m2=DAC_min_max(a,mid+1,j);
if(m1.max<m2.max)
   result.max=m2.max;
else
result.max=m1.max;
if(m1.min<m2.min)
result.min=m1.min;
else
result.min=m2.min;

}
return result;
}

int main(){
int a[]={100,23,6,7,9,10,120,67,88,99,66};
int n=11;
int low=0;
int high=n-1;
printarray(a,n);
number_range nr;
nr=DAC_min_max(a,low,high);
printf("\n Elements are : %d %d",nr.max,nr.min);
}
