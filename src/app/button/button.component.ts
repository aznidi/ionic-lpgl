import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

@Component({
  selector: "app-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() label = "Button";
  @Input() type: "button" | "submit" | "reset" = "button";

  @Input() variant: ButtonVariant = "primary";
  @Input() size: ButtonSize = "md";

  @Input() disabled = false;
  @Input() loading = false;
  @Input() fullWidth = false;

  @Input() ariaLabel?: string;

  /** optional icon classes (FontAwesome / Ionicons / etc.) */
  @Input() leftIcon?: string;
  @Input() rightIcon?: string;

  @Output() pressed = new EventEmitter<MouseEvent>();

  get isDisabled(): boolean {
    return this.disabled || this.loading;
  }

  onClick(ev: MouseEvent) {
    if (this.isDisabled) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    this.pressed.emit(ev);
  }
}