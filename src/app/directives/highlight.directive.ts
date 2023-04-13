import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})
export class  HighlightDirective implements OnInit {
    defaultBgColor: string = 'red';

    @HostBinding('style.backgroundColor') bgColor!: string;
    @HostBinding('style.color') color!: string;

    @HostListener('mouseenter') handleMouseEnter() {
        this.bgColor = 'blue';
    }

    @HostListener('mouseleave') handleMouseLeave() {
        this.bgColor = this.defaultBgColor;
    }
    // constructor(
    //     private elRef: ElementRef,
    //     private renderer: Renderer2
    // ) {}

    ngOnInit(): void {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        // this.renderer.setStyle(this.elRef.nativeElement, 'color', '#fff');
        this.bgColor = this.defaultBgColor;
        this.color = '#fff';            

    }
}