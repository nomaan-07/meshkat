import { useMutation } from "@tanstack/react-query";
import { githubLogin as gitHubLoginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

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
