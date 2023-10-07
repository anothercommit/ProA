namespace Pilas
{
    class Metodos
    {
        public Stack<int> InvertirStack(Stack<int> stack)
        {
            Stack<int> result = new();
            while (stack.Count > 0)
                result.Push(stack.Pop());

            return result;
        }

        public bool Balanceado(string str)
        {
            Stack<char> stack = new();

            foreach (char e in str)
            {
                if (e == '(') stack.Push(e);
                else if (e == ')')
                {
                    if (stack.TryPop(out char result) == false) return false;
                }
                else return false;
            }

            return stack.Count == 0 ? true : false;
        }

        public void MostrarStack(Stack<int> stack)
        {
            foreach (int e in stack)
                Console.Write(e);
        }
    }
}