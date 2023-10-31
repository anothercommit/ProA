using System.Collections;
using System.Globalization;

namespace Prueba
{
    class Program
    {
        static void Main()
        {
            // Console.WriteLine("Act 1 -> ");
            // Console.WriteLine(FiltrarValores());

            // Console.WriteLine("Act 2:");
            // List<List<int>> a = [[1, 2], [3, 4]];
            // List<List<int>> b = [[1, 2], [3, 4]];

            // List<List<int>> matriz = SumarMatrices(a, b);

            // for (int y = 0; y < matriz.Count; y++)
            // {
            //     for (int x = 0; x < matriz[0].Count; x++)
            //         Console.Write(matriz[y][x] + "\t");
            //     Console.WriteLine();
            // }

            // Console.WriteLine("Act 3 -> ");
            // Console.WriteLine(string.Join(", ", MinYMax()));

            Console.WriteLine("Act 4 -> ");
            Console.WriteLine(string.Join(", ", Adjacent([0, 1, 11, 12, 15, 19])));
        }

        static int[] Adjacent(ArrayList arrList)
        {
            int[] diferencias = [0, 0, 0];

            for (int i = 1; i < arrList.Count; i++)
            {
                if (((int)arrList[i] - (int)arrList[i - 1]) > diferencias[0])
                {
                    diferencias[0] = (int)arrList[i] - (int)arrList[i - 1];
                    diferencias[1] = i - 1;
                    diferencias[2] = i;
                }
            }

            return diferencias;
        }

        static int[] MinYMax()
        {
            Console.Write("Escriba la cantidad de ints que desea en la cola: ");
            int cantidad = int.Parse(Console.ReadLine());

            Queue<int> cola = [];

            Console.WriteLine($"Escriba {cantidad} ints apretando enter en cada uno: ");

            while (cantidad > 0)
            {
                string input = Console.ReadLine();

                if (int.TryParse(input, out int num))
                {
                    cola.Enqueue(num);
                    cantidad--;
                }
                else
                    Console.WriteLine("¡Eso no es un int! Por favor ingrese un int");
            }

            int min = int.MaxValue, max = int.MinValue;

            foreach (int i in cola)
            {
                if (i < min) min = i;
                else if (i > max) max = i;
            }

            return [min, max];
        }

        static List<List<int>> SumarMatrices(List<List<int>> m1, List<List<int>> m2)
        {
            List<List<int>> result = [];

            for (int y = 0; y < m1.Count; y++)
            {
                result.Add([]);
                for (int x = 0; x < m1[0].Count; x++)
                    result[y].Add(m1[y][x] + m2[y][x]);
            }


            return result;
        }

        static int FiltrarValores()
        {
            Console.Write("Escriba la cantidad de strings que desea en la pila: ");
            int cantidad = int.Parse(Console.ReadLine());

            Stack<string> pila = [];

            Console.WriteLine($"Escriba {cantidad} palabras apretando enter en cada una: ");

            while (cantidad > 0)
            {
                string palabra = Console.ReadLine();

                if (int.TryParse(palabra, out _))
                    Console.WriteLine("¡Eso es un numero! Por favor escriba una palabra");
                else
                {
                    pila.Push(palabra);
                    cantidad--;
                }
            }

            int consonantes = 0;

            foreach (string str in pila)
                foreach (char c in str)
                    if (c != 'a' && c != 'e' && c != 'i' && c != 'o' && c != 'u')
                        consonantes++;

            return consonantes;
        }
    }
}