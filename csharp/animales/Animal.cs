namespace Animales
{
    class Animal
    {
        const string tipo = "animal";
        protected bool vivo = true;

        public void Morir()
        {
            if (this.vivo)
            {
                Console.WriteLine("Me muero");
                this.vivo = false;
            }

            else Console.WriteLine("Ya estaba muerto");
        }
    }
}