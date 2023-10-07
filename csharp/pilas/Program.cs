namespace Pilas
{
    class Program
    {
        static void Main()
        {
            Metodos meth = new(); // clase con las actividades
            Stack<int> nums = new([0, 1, 2, 3]);
            string str = "(())";

            Console.Write($"Invertir:\t");
            meth.MostrarStack(nums);
            Console.Write(" -> ");
            meth.MostrarStack(meth.InvertirStack(nums));

            Console.WriteLine($"\nBalanceado:\t{str} -> {meth.Balanceado(str)}");
        }
    }
}