# crypto-exchange

Az oldalon lehet Regisztrálni illetve a létrehozott userrel bejelentkezni. Ezek a userek a localStorageban vannak eltárolva, van egy AllUsers és egy currentUser objektum. Az allUsers az összes mér regisztrált felhasználó, a currentUser az a user amely jelenleg is bevan jelentkezve. Illetve majd ki is lehet jelentkezni.

Bejelentkezés után a crypto-list komponensre navigál ahol kilistázza azokat a kriptókat amely a Userhez tartozik.

A navbar-on lévő "+"-ra kattintva felugrik egy modal ahol kilistázódnak a kriptók amelyek közül lehet választani, az ID-ra vagy a nevére kattintva tudjuk hozzáadni a listánkhoz.
Ha hozzá adtunk egyet akkor az a kripto megjelenik a navigációs bar-on.

Egyik elemre kattintva elnavigál az oldal a crypto-element komponensre ami tartalmaz egy calculatort és egy chart.
A calculator kezdetben az USD részen egy "1"-es és a másik mező az az adott kriptó jelenlegi értéke dollarban.
Ha más értéket adunk a mezőknek: 
-az USD mező módositása esetén azt fogjuk látni hogy egy dollárért mennyi kriptót kapunk.
-a másik mező érték adás esetén megmutatja hogy annyi kriptót hány dollárért tudunk venni.
A mezők felcserélhetőek a középső gombra rá kattintva, a műveletek úgy is helyesen végrehajtódnak.
Ezen az oldalon található még egy chart ami ki írja az adott kriptó nevét, sajnos itt nem sikerült személyre szabni a vonalakat adathiány miatt.
Illetve ezen az oldalon lehet még törölni az aktuális kriptót, innen vissza navigál a crypto-list oldalra.

