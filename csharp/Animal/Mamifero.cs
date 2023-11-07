namespace Animales
{
    class Mamifero : Animal
    {
        const string tipo = "mamifero";
        public void Mamar()
        {
            if (this.vivo)
                Console.WriteLine("Toy mamando");

            else Console.WriteLine("No puedo mamar porque estoy muerto");
        }
    }
}