import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { githubLogin as gitHubLoginApi } from "../../services/apiAuth";

export function useGithubLogin() {
  const { mutate: gitHubLogin, isPending } = useMutation({
    mutationFn: gitHubLoginApi,
    onSuccess: (data) => {
      window.location.href = data.url;
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { gitHubLogin, isPending };
}
