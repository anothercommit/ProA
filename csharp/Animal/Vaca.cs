namespace Animales
{
    class Vaca : Mamifero
    {
        const string tipo = "vaca";

        public void Pastorear()
        {
            if (this.vivo)
                Console.WriteLine("Toy pastoreando");

            else Console.WriteLine("No puedo pastorear porque estoy muerto");
        }
    }
}