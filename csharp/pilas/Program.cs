namespace Pilas
{
    internal class Program
    {
        static void Main()
        {
            Metodos metodos = new();
            Stack<int> stack = new([1,2,3,4,5]);

            foreach (int e in stack) 
                Console.Write($"{e}, ");
            
            Console.WriteLine();

            stack = metodos.invertirStack(stack);

            foreach (int e in stack) 
                Console.Write($"{e}, ");
            Console.WriteLine();
        }
    }
}