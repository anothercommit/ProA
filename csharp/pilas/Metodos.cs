namespace Pilas {
    class Metodos {
        public Stack<int> invertirStack(Stack<int> stack){
            Stack<int> result = new();
            for (int i =0; i < stack.Count; i++)
                result.Push(stack.Pop());
            
            return result;
        }
    }
}