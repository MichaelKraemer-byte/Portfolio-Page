import { Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.interface';
import { DomSanitizer, SafeHtml  } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations:  [
    // Trigger for the entire modal fade in/out
    trigger('fadeAnimation', [
      state('open', style({
        opacity: 1,
        zIndex: 3,
        display: 'block',
      })),
      state('closed', style({
        opacity: 0,
        zIndex: -2,
        display: 'none',
      })),
      transition('open => closed', [
        animate('0.125s ease-in-out', style({ opacity: 0 })),
        style({ display: 'none' })
      ]),
      transition('closed => open', [
        style({ display: 'block' }),  
        animate('0.125s ease-in-out', style({ opacity: 1 }))
      ])
    ]),
    // Trigger for the project content fade in/out
    trigger('fadeProject', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('0.100s ease-in-out', style({ opacity: 0 }))
      ]),
      transition('closed => open', [
        animate('0.100s ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ModalComponent {


  constructor(private sanitizer: DomSanitizer) {}


  @Input() project: Project | null = null;
  @Input() projects: Project[] = [];
  
  isModalOpen: boolean = false; 
  animateNextProject: boolean = false; 

  close() {
    document.body.style.overflow = ''; 
    this.isModalOpen = false;  
  }

  nextProject() {
    if (this.project) {
    this.animateNextProject = false;

    setTimeout(() => {
      const nextIndex = this.project!.number % this.projects.length;
      this.project = this.projects[nextIndex];
      this.animateNextProject = true;
    }, 100)
    }
  }

  getTechnologyIcon(tech: string): string {
    const technologyIcons: { [key: string]: string } = {
      'CSS': `
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24" fill="none">
            <path d="M0.00184991 0.00422903C0.00184991 0.0972677 -0.00231239 0.160703 0.00184991 0.224138C0.160017 1.98341 0.318185 3.74269 0.47219 5.5062C0.68863 8.00132 0.900907 10.4964 1.11735 12.9873C1.36292 15.787 1.61266 18.5824 1.84991 21.382C1.86656 21.585 1.93732 21.6738 2.12462 21.7245C4.7885 22.4688 7.44405 23.2174 10.1079 23.9574C10.2869 24.0082 10.5033 24.0167 10.6823 23.9659C13.3545 23.2216 16.0226 22.4646 18.6947 21.7161C18.8987 21.6569 18.9695 21.5638 18.9861 21.3524C19.0694 20.2951 19.1693 19.2336 19.2608 18.1764C19.4148 16.4255 19.5647 14.6747 19.7187 12.9239C19.8977 10.8686 20.0808 8.81752 20.2598 6.76222C20.393 5.23131 20.5345 3.70463 20.6677 2.17372C20.7301 1.45479 20.7842 0.735851 20.8425 0H0.00184991V0.00422903ZM16.8217 6.11095C16.6844 7.65877 16.547 9.21082 16.4096 10.7586C16.2515 12.5391 16.0933 14.3195 15.9351 16.0957C15.8894 16.6074 15.8228 17.1191 15.8103 17.635C15.8019 17.9099 15.6854 17.9818 15.4606 18.0453C13.854 18.4851 12.2515 18.9376 10.649 19.3859C10.5783 19.407 10.5117 19.4324 10.4409 19.4535C10.4159 19.4408 10.391 19.4324 10.3618 19.4197C8.64695 18.946 6.93208 18.4682 5.21722 17.9861C5.14646 17.9649 5.05488 17.8507 5.04656 17.7704C4.92585 16.4509 4.81763 15.1315 4.70109 13.7866H7.31918C7.36496 14.3153 7.41491 14.8523 7.45653 15.3937C7.494 15.8927 7.48983 15.8927 7.95185 16.0196C8.78015 16.2437 9.61261 16.4636 10.4409 16.6835L10.4326 16.6624C11.34 16.4171 12.2473 16.176 13.1547 15.9138C13.238 15.8885 13.3337 15.7531 13.3462 15.6601C13.4003 15.2541 13.4294 14.8439 13.4627 14.4379C13.5168 13.7824 13.571 13.1269 13.6292 12.4418H10.4326L10.4409 12.4249C10.4201 12.4249 10.3951 12.4249 10.3743 12.4249H4.58038C4.5013 11.5495 4.42638 10.6825 4.34729 9.7902H10.3785C10.3993 9.7902 10.4243 9.7902 10.4451 9.7902L10.4367 9.77328H13.8623C13.9414 8.86404 14.0205 7.97595 14.0996 7.07094H10.4326L10.4409 7.05402C10.4201 7.05402 10.3951 7.05402 10.3743 7.05402C8.32229 7.05825 6.27028 7.05825 4.21826 7.06248C4.18913 7.06248 4.15999 7.04979 4.10588 7.03287C4.03096 6.17015 3.95187 5.30743 3.87695 4.41933H10.3743C10.3951 4.41933 10.4201 4.41933 10.4409 4.41933L10.4326 4.40242H16.9591C16.9133 4.99448 16.8675 5.55271 16.8217 6.11095Z" fill="#3DCFB6"/>
          </svg>`,
      'HTML': `
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
            <path d="M10.9999 19.4136L16.5112 17.9064L17.2544 9.7728H7.45219L7.20883 7.068H17.4989L17.7697 4.4148H4.23012L4.98881 12.4284H14.3174L14.0061 15.8676L10.9999 16.668L7.99377 15.8676L7.80529 13.6548H5.09737L5.48984 17.9076L10.9999 19.4136ZM0.263672 0H21.7362L19.8001 21.6L10.9999 24L2.19978 21.6L0.263672 0Z" fill="#3DCFB6"/>
          </svg>`,
      'Firebase': `
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24" fill="none">
            <path d="M0 19.3376L2.95682 0.460691C3.00231 0.187771 3.27525 -0.0396618 3.54818 0.00582481C3.73014 0.0513114 3.86661 0.142285 3.95759 0.278744L7.00539 6.01005L8.23361 3.69024C8.37008 3.41732 8.6885 3.32634 8.96144 3.4628C9.05242 3.50829 9.1434 3.59926 9.18889 3.69024L17.4225 19.3831H0V19.3376Z" fill="#3DCFB6" fill-opacity="0.5"/>
            <path d="M10.1897 12.0142L7.00539 6.01001L0 19.3376L10.1897 12.0142Z" fill="#3DCFB6" fill-opacity="0.5"/>
            <path d="M17.4225 19.3376L15.148 5.32775C15.1025 5.00934 14.8296 4.8274 14.5112 4.87288C14.4202 4.87288 14.2837 4.96386 14.1927 5.00934L0 19.3376L7.91518 23.7953C8.41557 24.0682 9.00693 24.0682 9.50732 23.7953L17.4225 19.3376Z" fill="#3DCFB6"/>
          </svg>`,
      'Angular': `
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
            <path d="M11.0513 0L22.1025 3.984L20.4175 18.756L11.0513 24L1.68502 18.756L0 3.984L11.0513 0ZM11.0513 2.652L4.14244 18.312H6.71869L8.10781 14.808H13.9709L15.3612 18.312H17.9363L11.0513 2.652ZM13.069 12.648H9.03351L11.0513 7.74L13.069 12.648Z" fill="#3DCFB6"/>
          </svg>`,
      'JavaScript':`
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M0 0C8.0054 0 15.9946 0 24 0C24 8.0054 24 16.0108 24 24C16.0108 24 8.0054 24 0 24C0 15.9784 0 7.9892 0 0ZM21.472 12.7049C20.9858 11.8298 20.3214 11.2302 19.3653 11.0196C18.6847 10.8575 18.0041 10.8575 17.3234 11.0034C15.1195 11.4571 14.1796 14.1148 15.6057 15.8812C16.108 16.497 16.7725 16.8697 17.4693 17.1938C18.0851 17.4855 18.7171 17.761 19.3329 18.0689C19.7542 18.2795 19.9325 18.6685 19.8839 19.1384C19.8352 19.6084 19.5111 19.8677 19.106 20.0135C18.1985 20.3376 17.1452 20.0459 16.5294 19.2843C16.3997 19.1222 16.2701 18.944 16.1404 18.7657C15.5246 19.1222 14.9251 19.4625 14.3255 19.819C14.6982 20.5483 15.2167 21.1317 15.9298 21.5206C17.1452 22.185 18.4254 22.2822 19.738 21.9581C20.5969 21.7475 21.3261 21.3099 21.7799 20.5159C22.6226 19.0088 22.1364 17.129 20.6455 16.2053C19.9811 15.8001 19.2357 15.5246 18.5388 15.1681C18.1985 14.9899 17.842 14.8278 17.5503 14.6009C17.0317 14.1796 17.129 13.3369 17.7124 13.0128C18.2795 12.6887 19.0736 12.8832 19.5111 13.4504C19.6084 13.5638 19.6732 13.6934 19.7704 13.8231C20.3214 13.4504 20.8886 13.0777 21.472 12.7049ZM6.32005 20.0621C6.64416 20.7589 7.11411 21.3099 7.77853 21.6664C8.63741 22.1364 9.57731 22.2174 10.5334 22.0716C11.3923 21.9419 12.1053 21.553 12.5753 20.7752C12.9642 20.1269 13.0777 19.4139 13.0777 18.6523C13.0777 16.1891 13.0777 13.7259 13.0777 11.2627C13.0777 11.1978 13.0777 11.1168 13.0777 11.0358C12.316 11.0358 11.5868 11.0358 10.8251 11.0358C10.8251 11.133 10.8251 11.214 10.8251 11.3113C10.8251 13.7421 10.8251 16.1567 10.8251 18.5874C10.8251 18.8143 10.8089 19.0574 10.7765 19.2843C10.7117 19.657 10.5172 19.9325 10.1445 20.0459C9.44767 20.2566 8.88049 20.0459 8.47536 19.4463C8.37812 19.2843 8.28089 19.1222 8.16745 18.9602C7.53545 19.3329 6.93585 19.6894 6.32005 20.0621Z" fill="#3DCFB6"/>
          </svg>`,
      'TypeScript':`
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M23.9782 1.90996C23.8034 0.993179 23.0933 0.251023 22.1866 0.0545703C22.1429 0.0436562 22.0992 0.0436562 22.0446 0.0327422C22.0337 0.0327422 22.0228 0.0109141 22.0118 0H1.97724C1.96632 0.0109141 1.95539 0.0327422 1.93355 0.0327422C1.02685 0.185539 0.262176 0.905866 0.0546199 1.82265C0.0436959 1.85539 0.021848 1.89904 0 1.9427V22.0136C0.010924 22.0355 0.032772 22.0464 0.032772 22.0682C0.251252 23.0723 0.862995 23.6944 1.85708 23.9454C1.88985 23.9563 1.9117 23.9782 1.93355 24H22.0446C22.0665 23.9891 22.0774 23.9673 22.0992 23.9563C23.0933 23.7271 23.7051 23.1269 23.9563 22.1337C23.9672 22.101 23.9563 22.0573 23.9672 22.0246C23.9672 22.0136 23.9891 22.0027 24 21.9918V1.97544C24 1.95362 23.9782 1.9427 23.9782 1.90996ZM13.9281 13.3042H13.8079C12.9012 13.3042 11.9836 13.3042 11.0769 13.3042C11.0332 13.3042 10.9895 13.3042 10.9458 13.3042C10.9458 13.3151 10.9349 13.3151 10.9349 13.3261C10.9349 13.3697 10.9349 13.4134 10.9349 13.457V21.8718H8.54256V13.3151H5.53846V11.4052H13.9172V13.3042H13.9281ZM21.99 19.0123C21.9681 19.3834 21.9135 19.7435 21.7606 20.0928C21.7169 20.2019 21.6841 20.3001 21.6295 20.4093C21.4329 20.824 21.1051 21.1187 20.7228 21.3588C20.2858 21.6317 19.8052 21.7844 19.3027 21.8827C18.7456 21.9918 18.1884 22.0246 17.6204 22.0027C17.3473 21.9918 17.0742 21.9918 16.8011 21.9591C16.1566 21.8827 15.523 21.7408 14.9331 21.457C14.9003 21.4461 14.8566 21.3915 14.8566 21.3588C14.8566 20.6494 14.8566 19.94 14.8566 19.2306C14.8566 19.2196 14.8566 19.2087 14.8566 19.1869C15.0314 19.307 15.2062 19.427 15.381 19.5252C15.807 19.7763 16.2767 19.9509 16.7574 20.06C17.1725 20.1583 17.5876 20.1692 18.0027 20.1473C18.3195 20.1364 18.6363 20.06 18.9203 19.9181C19.1716 19.7872 19.3792 19.6126 19.4338 19.3179C19.4884 19.0559 19.4665 18.794 19.3136 18.5648C19.0951 18.2374 18.7893 18.03 18.4506 17.8554C18.0683 17.6699 17.6859 17.5061 17.2927 17.3315C16.7137 17.0696 16.1457 16.7858 15.6759 16.3493C15.2936 15.9891 15.0096 15.5634 14.8785 15.0505C14.802 14.7449 14.7802 14.4393 14.7911 14.1337C14.802 13.3806 15.0751 12.7367 15.6104 12.2019C16.0473 11.7653 16.5826 11.5034 17.1725 11.3506C17.5767 11.2524 17.9809 11.176 18.396 11.1651C18.6909 11.1651 18.9859 11.1323 19.2699 11.1432C19.7178 11.1542 20.1548 11.176 20.5917 11.2851C20.8757 11.3615 21.1707 11.4379 21.4547 11.5034C21.5093 11.5143 21.5312 11.5471 21.5312 11.6126C21.5312 12.2892 21.5312 12.9768 21.5312 13.6535C21.5312 13.6753 21.5312 13.6971 21.5203 13.7299C21.4329 13.6753 21.3564 13.6317 21.2799 13.588C20.9304 13.3915 20.5589 13.2606 20.1766 13.1623C19.7506 13.0641 19.3245 12.9986 18.8876 13.0096C18.5926 13.0205 18.2868 13.0641 18.0137 13.1623C17.675 13.2824 17.4019 13.4789 17.2817 13.839C17.1834 14.1228 17.2599 14.3629 17.4347 14.5921C17.6532 14.8759 17.9481 15.0723 18.2649 15.2251C18.6909 15.4325 19.1279 15.6071 19.543 15.8035C20.0237 16.0327 20.5043 16.2619 20.9085 16.6003C21.2581 16.895 21.5749 17.2224 21.7497 17.6589C21.848 17.9209 21.9354 18.1937 21.9354 18.4884C21.9791 18.663 22.0009 18.8377 21.99 19.0123Z" fill="#3DCFB6"/>
          </svg>`,
      'React':`
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 32 32" fill="none">
            <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#3DCFB6"/>
          </svg>`,
    };
  
    const iconSvg = technologyIcons[tech] || '';
    return this.sanitizer.bypassSecurityTrustHtml(iconSvg) as any;
  }
}