import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { deleteCabins as deleteCabinsApi } from "../../services/apiCabins"

export function useDeleteCabin(){

  
  const queryClient = useQueryClient()
  
const {isLoading : isDeleting, mutate : deleteCabins} = useMutation({
  mutationFn : deleteCabinsApi,
  onSuccess : ()=>{
    toast.success('Cabin successfully deleted')
    queryClient.invalidateQueries({
      queryKey: ["cabins"]
    })
  },
  onError:(error)=> toast.error(error.message)
  
})

return {isDeleting, deleteCabins}
}