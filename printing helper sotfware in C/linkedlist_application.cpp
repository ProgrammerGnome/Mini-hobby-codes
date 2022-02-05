#include <stdio.h>
#include <stdlib.h>

struct rec {
    int szam, szam2;
    rec * kovetkezo, * kovetkezo2;
};

int main() {
    int bezaro, inkrement, inkrement2, adat;
    rec * uj, * elso = NULL, * aktualis;
    rec * uj2, * elso2 = NULL, * aktualis2;

    printf("Hányadik oldaltól szeretne nyomtatni: "); scanf("%d", &inkrement);
    inkrement2 = inkrement;
    printf("Hányadik oldalig szeretne nyomtatni: "); scanf("%d", &adat);

    for (inkrement; inkrement <= adat; inkrement++) {
      uj = (rec * ) malloc(sizeof(rec));
      if (!uj) { //Ha nincs cím (NULL), akkor nem sikerült a helyfoglalás
          printf("Nincs elég memória\n");
          system("pause");
          return -1;}
        if (inkrement % 2 == 0) {
          uj -> szam = inkrement;
          uj -> kovetkezo = NULL;
          if (!elso) elso = uj; //Ha legelsõ elem
          else aktualis -> kovetkezo = uj;
          aktualis = uj;}
        }
    for (inkrement2; inkrement2 <= adat; inkrement2++) {
      uj2 = (rec * ) malloc(sizeof(rec));
      if (!uj2) { //Ha nincs cím (NULL), akkor nem sikerült a helyfoglalás
          printf("Nincs elég memória\n");
          system("pause");
          return -1;}
      if (inkrement2 % 2 != 0) {
        uj2 -> szam2 = inkrement2;
        uj2 -> kovetkezo2 = NULL;
        if (!elso2) elso2 = uj2; //Ha legelsõ elem
        else aktualis2 -> kovetkezo2 = uj2;
        aktualis2 = uj2;}
    }
    printf("Nyomjon entert a bezáráshoz...");scanf("%d",&bezaro);
    //A páros oldalak fájlba írása
    FILE *fp1;
    fp1 = fopen("paros_oldalak.txt", "w+");
    if (fp1 != NULL){
      aktualis = elso; //Ez elsõ elem címe
      while (aktualis) { //A lista végén NULL
          fprintf(fp1,"%d%s", aktualis -> szam, ",");
          aktualis = aktualis -> kovetkezo;}
    }
    fclose(fp1);
    //Ugyanez, csak a páratlanokkal
    FILE *fp2;
    fp2 = fopen("paratlan_oldalak.txt", "w+");
    if (fp2 != NULL){
      aktualis2 = elso2; //Ez elsõ elem címe
      while (aktualis2) { //A lista végén NULL
          fprintf(fp2,"%d%s", aktualis2 -> szam2, ",");
          aktualis2 = aktualis2 -> kovetkezo2;}
    }
    fclose(fp2);
}
