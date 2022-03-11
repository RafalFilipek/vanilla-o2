# @opl/icons

Pakiet przechowujący wszystkie ikony dostępne w portalu.

Wszystkie możliwe do umieszczenia ikony muszą być umieszczone w katalogu `Svg`.

Flow:

1. Sprawdzamy czy nie ma ich juz w repo  
   a. W `https://opl-styleguide-dot-systemteam.appspot.com/?path=/story/opl-icons-ikony--wszystkie-ikony`  
   b. Przez katalogi
2. Te ikonki, które potrzebujemy przepuszczamy przez `https://jakearchibald.github.io/svgomg/` - struktura w svg jest generowana automatycznie i często ma dużo nadmiarowych znaczników
3. ikonka powinna mieć viewBox, zamiast width i height na sztywno
4. dodajemy wygenerowany plik do `Svg`
5. optymalizujemy go wywołując `yarn optimize`
6. generujemy sprite `yarn generate`
7. uzupełniamy typowania `src/iconsMap.ts`
8. uzupełniamy klucze w `apps\styleguide\stories\@opl\icons\iconsMap.ts`
