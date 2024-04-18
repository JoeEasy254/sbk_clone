import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MenuIcon,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavSmall() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white mt-[30px] mx-[10px]">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
     
            <span>Courses</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="bg-white">
              <DropdownMenuItem>
                <span>Html</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Javascript</span>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <span>CSS</span>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <span>Python</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Robotics</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Game development</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
         
            <span>About </span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="bg-white">
              <DropdownMenuItem>
                <span>Our Story</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />

        <DropdownMenuSeparator />
        <DropdownMenuItem>
       
          <span>Contact</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
