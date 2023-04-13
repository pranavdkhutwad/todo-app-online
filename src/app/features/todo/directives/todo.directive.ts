import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appTodo]'
})
export class  TodoDirective {
    @HostBinding('style.boxShadow') boxShadow!: string;

    @HostListener('mouseenter') handleMouseEnter() {
        this.boxShadow = '2px 2px 3px rgba(0, 0, 0, 0.3)';
    }

    @HostListener('mouseleave') handleMouseLeave() {
        this.boxShadow = 'none';
    }
}
