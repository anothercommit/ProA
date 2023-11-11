namespace Animales
{
    class Paloma : Oviparo
    {
        const string tipo = "paloma";

        public void Volar()
        {
            if (this.vivo)
                Console.WriteLine("Toy volando");

            else Console.WriteLine("No puedo volar porque estoy muerto");
        }
    }
}