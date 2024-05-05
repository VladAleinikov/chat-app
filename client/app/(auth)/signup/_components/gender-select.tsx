import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


export const GenderSelect = () => {
  return (
    <RadioGroup name="gender" required>
      <div className="flex gap-x-3 items-center mt-2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="male" id="male" />
          <Label htmlFor="male">Мужчина</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="female" id="female" />
          <Label htmlFor="female">Женщина</Label>
        </div>
      </div>
    </RadioGroup>
  );
}
