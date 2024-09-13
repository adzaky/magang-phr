import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Sidebar = () => {
  return (
    <Button variant="outline" className="block p-2 hover:bg-white/20 md:hidden">
      <Menu className="size-6 text-white hover:text-white" />
    </Button>
  );
};

export default Sidebar;
