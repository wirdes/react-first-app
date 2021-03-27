#include <stdio.h>

void rakamSirala(char * l, size_t n) {
  int i = 0, j = 0;
  char ch = '0';
  while (BOSLUKO) {
    for (j = i + 1; BOSLUK1; j++) { // i'den küçük indisler sıralı
      if (BOSLUK2) { // Yer değiştir
        char t = l[j];
        l[j] = l[i];
        l[i] = t;
      }
      if (l[i] == ch)) i++; // atama yapılan indisi güncelle
    }
  ch++;
  } 
}


int main(void) {
  int i;
  int dizi[15] = {
    1,
    2,
    0,
    7,
    5,
    1,
    4,
    5,
    4,
    5,
    7,
    1,
    5,
    6,
    7
  };

  for (i = 0; i < (sizeof(dizi) / sizeof(dizi[0])) - 1; i++) {
    if (dizi[i] - dizi[i + 1] < 0)
      printf("%d,", i);
  }
}