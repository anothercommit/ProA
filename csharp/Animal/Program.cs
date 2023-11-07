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
            Paloma paloma = new();

            animal.Morir();
            mamifero.Morir();
            vaca.Pastorear();
            vaca.Morir();
            vaca.Pastorear();
            paloma.Volar();
        }
    }
}