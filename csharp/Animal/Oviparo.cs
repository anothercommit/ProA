namespace Animales
{
    class Oviparo : Animal
    {
        const string tipo = "oviparo";

        public void Empollar()
        {
            if (this.vivo)
                Console.WriteLine("Toy empollando");

            else Console.WriteLine("No puedo empollar porque estoy muerto");
        }
    }
}