**FIND-PATH(x, y)**

1. if (x,y outside the maze) return false
2. if (x,y is goal) return true
3. if (x,y not open) return false
4. mark x,y as part of the solution path
5. if (FIND-PATH(NorthNorth of x,y) == true) return true
6. if (FIND-PATH(EastEast of x,y) == true) return true
7. if (FIND-PATH(SouthSouth of x,y) == true) return true
8. if (FIND-PATH(WestWest of x,y) == true) return true
9. unmark x,y as part of the solution path
10. return false
