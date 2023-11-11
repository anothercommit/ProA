namespace Animales
{
    class Program
    {
        static void Main()
        {
            Animal animal = new();
            Mamifero mamifero = new();
            Oviparo oviparo = new();
            Vaca vaca = new();
            Vaca vaca1 = new();
            Paloma paloma = new();

            vaca.Pastorear();
            vaca.Morir();
            vaca.Pastorear();
            vaca1.Pastorear();
        }
    }
}