import { QueryClient, QueryClientProvider } from 'react-query'
import Apps from "./App"

const queryClient = new QueryClient()

export default function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <Apps />
      </QueryClientProvider>
    )
  }