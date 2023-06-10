import { useQuery } from "@tanstack/react-query";

const useManageClasses = () => {
  const { refetch, data: manageClasses = [] } = useQuery({
    queryKey: ["classes-page"],
    queryFn: async () => {
      const res = await fetch(`https://assignment12-server-developer-nieem.vercel.app/classes-page`);
      return res.json();
    },
  });

  return [manageClasses, refetch];
};

export default useManageClasses;
